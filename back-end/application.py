from flask import Flask, request
from flask_cors import CORS
import json
from newssite import Site
from cnn import CNN
from huffpost import HuffPost
from washpost import WashPost
import random
import logging

application = Flask(__name__)
CORS(application)

@application.route('/')
def hello():
    return """<h1>Commands</h1>
            <p>keyword?key=[keyword to search for]&source=[specific source to use]</p>"""

@application.route('/keyword')
def keyword_search():
    # setup args for site and keyword
    
    # get site to use, if none use all
    src = request.args.get('source')
    src = src.lower() if src is not None else src
    keyword = request.args.get('key')

    sites = []
    # select th sites to use
    if src is None:
        sites.append(CNN())
        sites.append(HuffPost())
        sites.append(WashPost())
    elif src == "cnn":
        sites.append(CNN())
    elif src == "huffpost":
        sites.append(HuffPost())
    elif src == "washpost":
        sites.append(WashPost())
    

    data = {'data': []}

    for site in sites:
        # get the links and its source
        links = site.get_links(keyword)
        link_src = site.__class__.__name__
        for link in links:
            new_entry = {'src': link_src, 'link': link}
            data['data'].append(new_entry)

    random.shuffle(data['data'])

    json_str = json.dumps(data)

    return json_str

if __name__ == "__main__":
    logging.basicConfig(filename='/opt/python/log/debug.log', level=logging.DEBUG)
    application.run(host='0.0.0.0')
    logging.debug('test')