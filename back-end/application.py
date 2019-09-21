from flask import Flask, request
from flask_cors import CORS
import json
from newssite import Site
from cnn import CNN
from huffpost import HuffPost

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
        #sites.append(HuffPost())
    elif src == "cnn":
        sites.append(CNN())
    elif src == "huffpost":
        sites.append(HuffPost())
    

    links = [{site.__class__.__name__: site.get_links(keyword)} for site in sites]

    data = {"links": links}
    json_str = json.dumps(data)

    return json_str

if __name__ == "__main__":
    application.run(host='0.0.0.0')