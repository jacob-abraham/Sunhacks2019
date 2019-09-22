from newssite import Site

class WashPost(Site):

    def __init__(self):
        super().__init__()
        self.query_keyword = 'https://www.washingtontimes.com/search/?cx=015385541671335030271%3Anfb7f1nj88q&cof=FORID%3A11&ie=UTF-8&q={}&sa=GO'
        self.query_breaking = 'https://www.washingtontimes.com/news/national/'
        self.url = 'https://www.washingtontimes.com/'

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('h2', class__ = 'article-headline')
            # grab the links
            links_tags = [tag.find('a').get('href') for tag in all_headlines]
            links = [(self.url + link[1:]) for link in link_tags
        else:
            # scrape for keyword
            all_headlines = parser.find_all('div', class__ = 'gs-image-box gs-web-image-box gs-web-image-box-landscape')
            # grab the links
            links_tags = [tag.find('a').get('href') for tag in all_headlines]
        return links