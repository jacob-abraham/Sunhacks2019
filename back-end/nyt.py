from newssite import Site

class NYT(Site):

    def __init__(self):
        super().__init__()
        self.query_keyword = 'https://www.nytimes.com/search?query={}'
        self.query_breaking = 'https://www.nytimes.com/'
        self.bias_score = -1.2

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('div', class__ = 'css-qvz0vj')
            # grab the links
            links = [tag.find('a').get('href') for tag in all_headlines]
        else:
            # scrape for keyword
            all_headlines = parser.find_all('div', class__ = 'css-138we14')
            # grab the links
            links_tags = [tag.find('a').get('href') for tag in all_headlines]
            links = [(self.query_breaking + link[1:]) for link in link_tags
        return links