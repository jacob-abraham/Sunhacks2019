from newssite import Site
from datetime import date

class CNN(Site):

    def __init__(self):
        super().__init__()
        self.query_keyword = 'https://www.cnn.com/search?q={}&size={}'
        self.query_breaking = 'https://www.cnn.com/us/'
        self.url = 'https://www.cnn.com/'
    
    def get_links(self, keyword=None):
        parser = self.get_parser(keyword)
        links = []
        # no keyword, scarp for breaking
        if keyword is None:
            # grab all headlines
            all_headlines = parser.find_all('h3', class_ = 'cd__headline')

            # grab the links
            link_tags = [tag.find('a').get('href') for tag in all_headlines]
            # grab only from todays date
            links = [(self.url + link[1:]) for link in link_tags]
        else:
            all_headlines = parser.find_all('h3', class_ = 'cnn-search__result-headline')
            link_tags = [tag.find('a').get('href') for tag in all_headlines]
            links = [link[2:] for link in link_tags]
        return links
