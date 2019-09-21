from newssite import Site
from datetime import date

class CNN(Site):

    def __init__(self):
        super().__init__()
        self.query_keyword = 'https://www.cnn.com/search?q={}&size={}'
        self.query_breaking = 'https://www.cnn.com/us/'
        self.today = date.today().strftime("%Y/%m/%d")
    
    def get_links(self, keyword=None):
        parser = self.get_parser(keyword)
        links = []
        # no keyword, scarp for breaking
        if keyword is None:
            # grab all headlines
            all_headlines = [headline for headline in parser.find_all('article') if headline.get('data-section-name') is not None]
            # grab the links
            link_tags = [tag.find('a').get('href') for tag in all_headlines]
            # grab only from todays date
            links = [(self.query_breaking + link[1:]) for link in link_tags if link[1:11] == self.today]

        else:
            all_headlines = parser.find_all('h3', class_ = 'cnn-search__result-headline')
            link_tags = [tag.find('a').get('href') for tag in all_headlines]
            links = [link[2:] for link in link_tags]

        return links
