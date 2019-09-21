from newssite import Site

class CNN(Site):

    def __init__(self):
        super().__init__()
        self.query = 'https://www.cnn.com/search?q={}&size={}'
    
    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        all_headlines = parser.find_all('h3', class_ = 'cnn-search__result-headline')
        link_tags = [tag.find('a').get('href') for tag in all_headlines]
        links = [link[2:] for link in link_tags]
        return links
