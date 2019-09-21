from newssite import Site

class HuffPost(Site):

    def __init__(self):
        super().__init__()
        self.query = 'https://search.huffpost.com/search?p={}'
    
    def query_str(self, keyword):
        return self.query.format(keyword.strip().replace(' ', '%20'))

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        all_headlines = parser.find_all('li', class_ = 'ov-a mt-0 pt-26 pb-26 bt-dbdbdb')
        link_tags = [tag.find('a').get('href') for tag in all_headlines]
        links = [link[2:] for link in link_tags]
        return links
