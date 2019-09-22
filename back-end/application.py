from flask import Flask, request
from flask_cors import CORS
import json
from newssite import Site
from cnn import CNN
from huffpost import HuffPost
from washpost import WashPost
from fox import Fox
from wsj import WSJ
from cbs import CBS
import random
from selenium import webdriver
from time import time

application = Flask(__name__)
CORS(application)


# TODO: as soon as app launches, open all websites to save csss

@application.route('/')
def hello():
    return """<h1>Commands</h1>
            <p>keyword?key=[keyword to search for]&source=[specific source to use]</p>"""

@application.route('/keyword')
def keyword_search():

    start = time()
    # web browser
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--incognito')
    prefs = {"profile.managed_default_content_settings.images": 2, 
            "profile.default_content_settings.images": 2,
            "disk-cache-size": 4096}
    options.add_experimental_option("prefs", prefs)
    options.add_argument('--headless')
    driver = webdriver.Chrome(chrome_options=options)
    print(f'Browser creation took {(time() - start):.4f}s:')

    # setup args for site and keyword
    # get site to use, if none use all
    src = request.args.get('source')
    src = src.lower() if src is not None else src
    keyword = request.args.get('key')
    # make args for only some links

    sites = []
    # select th sites to use
    if src is None:
        sites.append(CNN(driver))
        sites.append(HuffPost(driver))
        sites.append(WashPost(driver))
        sites.append(Fox(driver))
        sites.append(WSJ(driver))
        sites.append(CBS(driver))
    elif src == "cnn":
        sites.append(CNN(driver))
    elif src == "huffpost":
        sites.append(HuffPost(driver))
    elif src == "washpost":
        sites.append(WashPost(driver))
    elif src == "fox":
        sites.append(Fox(driver))
    elif src == "wsj":
        sites.append(WSJ(driver))
    elif src == "cbs":
        sites.append(CBS(driver))
    

    data = {'data': []}
    for site in sites:
        site_time = time()
        # get the links and its source
        links = site.get_links(keyword)
        link_src = site.__class__.__name__
        for link in links:
            new_entry = {'src': link_src, 'link': link}
            data['data'].append(new_entry)
        
        print(f'Reading "{link_src}" took {(time() - site_time):.4f}s')

    random.shuffle(data['data'])

    json_str = json.dumps(data)

    driver.quit()

    print(f'Total time for request took {(time() - start):.4f}s:')

    return json_str

if __name__ == "__main__":
    application.run(host='0.0.0.0')