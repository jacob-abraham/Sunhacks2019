from newssite import Site

class WashTimes(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.washingtontimes.com/search/?q={}'
        self.query_breaking = 'https://www.washingtontimes.com/news/national/'
        self.url = 'https://www.washingtontimes.com/'
        self.bias_score = 4.2

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('h2', class_ = 'article-headline')
            # grab the links
            for tag in all_headlines:
                link = tag.find('a').get('href')
                link = str(self.url + link[1:])
                title = str(tag.find('a').get('title')).strip()
                links.append((link,title))
        else:
            # scrape for keyword
            all_headlines = parser.find_all('div', class_ = 'gs-title')
            # grab the links
            for tag in all_headlines:
                link = str(tag.find('a').get('href'))
                title = str(tag.find('a').text).strip()
                links.append((link, title))
        return links