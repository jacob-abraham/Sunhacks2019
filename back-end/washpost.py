from newssite import Site

class WashPost(Site):

    def __init__(self):
        super().__init__()
        self.query_keyword = 'https://www.washingtonpost.com/newssearch/?query={}'
        self.query_breaking = 'https://www.washingtonpost.com/'

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = [headline for headline in parser.find_all('div') if headline.get('data-feature-id') is 'homepage/story-ans']
            # grab the links
            links = [tag.find('a').get('href') for tag in all_headlines]
        else:
            # scrape for keyword
            all_headlines = [headline for headline in parser.find_all('div') if headline.get('data-ng-repeat') is not None]
            # grab the links
            links = [tag.find('a').get('href') for tag in all_headlines]
        return links