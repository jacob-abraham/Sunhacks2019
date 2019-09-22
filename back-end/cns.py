from newssite import Site

class CNS(Site):

    def __init__(self):
        super().__init__()
        self.query_keyword = 'https://www.cnsnews.com/search/site/climate%20change'
        self.query_breaking = 'https://www.cnsnews.com/'

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('div', class__ = 'views-field views-field-title')
            # grab the links
            link_tags = [tag.find('span').find('a').get('href') for tag in all_headlines]
            links = [str(self.query_breaking + link[1:]) for link in link_tags]
        else:
            # scrape for keyword
            all_headlines = parser.find_all('h3', class__ = 'title')
            # grab the links
            link_tags = [tag.find('a').get('href') for tag in all_headlines]
            links = [str(self.query_breaking + link[1:]) for link in link_tags]
        return links