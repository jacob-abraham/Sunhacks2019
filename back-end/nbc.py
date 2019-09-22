from newssite import Site

class NBC(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.nbcnews.com/search/?q={}'
        self.query_breaking = 'https://www.nbcnews.com/'
        self.bias_score = -8.4

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('div', class_ = 'info___2S-C2')
            for tag in all_headlines:
                link = str(tag.find('h3').find('a').get('href'))
                title = str(tag.find('h3').find('a').text).strip()
                links.append((link, title))
        else:
            # scrape for keyword
            all_headlines = parser.find_all('div', class_ = 'gs-title')
            for tag in all_headlines:
                link = tag.find('a').get('href')
                if link is not None:
                    link = str(link)
                    title = str(tag.find('a').text).strip()
                    links.append((link, title))
        links = list(dict.fromkeys(links))
        return links