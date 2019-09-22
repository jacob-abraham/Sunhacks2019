from newssite import Site

class WashTimes(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.washingtontimes.com/search/?cx=015385541671335030271%3Anfb7f1nj88q&cof=FORID%3A11&ie=UTF-8&q={}&sa=GO'
        self.query_breaking = 'https://www.washingtontimes.com/news/national/'
        self.url = 'https://www.washingtontimes.com/'
        self.bias_score = 4.2

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('h2', class_ = 'article-headline')
            print(len(all_headlines))
            # grab the links
            link_tags = [tag.find('a').get('href') for tag in all_headlines]
            links = [str(self.url + link[1:]) for link in link_tags]
        else:
            # scrape for keyword
            all_headlines = parser.find_all('div', class_ = 'gs-image-box gs-web-image-box gs-web-image-box-landscape')
            # grab the links
            links = [tag.find('a').get('href') for tag in all_headlines]
        return links