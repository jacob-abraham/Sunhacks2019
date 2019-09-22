import requests
from bs4 import BeautifulSoup
from time import time

class Site:

    def __init__(self, driver):
        # web driver
        self.driver = driver
        self.query_keyword = None
        self.query_breaking = None
        self.html_content = None
        self.number = 10
        self.bias_score = None
    
    def query_str(self, keyword=None):
        # no keyword, use breaking news
        if keyword is None:
            return self.query_breaking
        else:
            return self.query_keyword.format(keyword.strip().replace(' ', '%20'))
    
    def get_html(self, keyword=None, refresh=False):
        if(refresh or self.html_content is None):
            start = time()
            self.driver.get(self.query_str(keyword))

            self.html_content = self.driver.page_source
            print(f'Parser generation took {(time() - start):.4f}s: parsing "{self.query_breaking}"')
        return self.html_content
    
    def get_parser(self, keyword=None):
        return BeautifulSoup(self.get_html(keyword), 'lxml')
    
    def get_links(self, keyword=None):
        pass