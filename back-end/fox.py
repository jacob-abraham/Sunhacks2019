from newssite import Site

class Fox(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.foxnews.com/search-results/search?q={}'
        self.query_breaking = 'https://www.foxnews.com/us/'
        self.url = 'https://www.foxnews.com/'
        self.bias_score = 8.8

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('article')
            for tag in all_headlines:
                #grab link
                link = tag.find('a').get('href')
                # remove video
                if 'video.foxnews' not in link:
                    link = str(self.url + link[1:])
                    title = str(tag.find('a').text).strip()
                    links.append((link, title))
        else:
            # scrape for keyword
            all_headlines = parser.find_all('div', class_ = 'search-directive ng-scope')
            for tag in all_headlines:
                link = str(tag.find('a').get('href'))
                if 'video.foxnews' not in link:
                    title = str(tag.find('a').text).strip()
                    links.append((link, title))
        # remove duplicates
        links = list(dict.fromkeys(links))
        return links