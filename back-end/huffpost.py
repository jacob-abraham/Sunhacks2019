from newssite import Site

class HuffPost(Site):

    def __init__(self):
        super().__init__()
        self.query_keyword = 'https://search.huffpost.com/search?p={}'
        self.query_breaking = 'https://www.huffpost.com/news/'

    def get_links(self, keyword=None):
        parser = self.get_parser(keyword)
        links = []
        # no keyword, scarp for breaking
        if keyword is None:
            all_headlines = parser.find_all('div', class_ = 'card__headline')
            links = [tag.find('a').get('href') for tag in all_headlines] 
        else:
            all_headlines = parser.find_all('li', class_ = 'ov-a mt-0 pt-26 pb-26 bt-dbdbdb')
            link_tags = [tag.find('a').get('href') for tag in all_headlines]
            links = [link[2:] for link in link_tags]
        return links
