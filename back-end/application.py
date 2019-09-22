from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from newssite import Site
from cnn import CNN
from huffpost import HuffPost
from washpost import WashPost
from fox import Fox
from wsj import WSJ
from cbs import CBS
from washtimes import WashTimes
from bireport import BiReport
from infowars import InfoWars
from nyt import NYT
from nbc import NBC
from cns import CNS
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
        sites.append(WashTimes(driver))
        sites.append(BiReport(driver))
        sites.append(InfoWars(driver))
        sites.append(NYT(driver))
        sites.append(NBC(driver))
        sites.append(CNS(driver))
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
    elif src == "washtimes":
        sites.append(WashTimes(driver))
    elif src == "bireport":
        sites.append(BiReport(driver))
    elif src == "infowars":
        sites.append(InfoWars(driver))
    elif src == "nyt":
        sites.append(NYT(driver))
    elif src == "nbc":
        sites.append(NBC(driver))
    elif src == "cns":
        sites.append(CNS(driver))
    

    data = {'data': []}
    for site in sites:
        site_time = time()
        # get the links and its source
        links = site.get_links(keyword)
        link_src = site.__class__.__name__
        for link in links:
            new_entry = {'src': link_src, 'link': link, 'title': 'blank', 'bias': site.bias_score}
            #new_entry = {'src': link_src, 'link': link[0], 'title': link[1], 'bias': site.bias_score}
            data['data'].append(new_entry)
        
        print(f'Reading "{link_src}" took {(time() - site_time):.4f}s')

    random.shuffle(data['data'])

    #json_str = json.dumps(data)
    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')

    driver.quit()

    print(f'Total time for request took {(time() - start):.4f}s:')

    return response

if __name__ == "__main__":
    application.run(host='0.0.0.0')