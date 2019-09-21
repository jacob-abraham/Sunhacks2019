from flask import Flask, request
import json
from newssite import Site
from cnn import CNN
from huffpost import HuffPost

api = Flask(__name__)

@api.route('/keyword')
def keyword_search():
    # setup args for site and keyword
    
    # get site to use, if none use all
    src = request.args.get('source')
    src = src.lower() if src is not None else src
    keyword = request.args['key']

    sites = []

    if src is None:
        sites.append(CNN())
        sites.append(HuffPost())
    elif src == "cnn":
        sites.append(CNN())
    elif src == "huffpost":
        sites.append(HuffPost())

    

    links = [{site.__class__.__name__: site.get_links(keyword)} for site in sites]

    data = {"links": links}
    json_str = json.dumps(data)

    return json_str