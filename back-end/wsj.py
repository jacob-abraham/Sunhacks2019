from newssite import Site

class WSJ(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.wsj.com/search/term.html?KEYWORDS={}'
        self.query_breaking = 'https://www.wsj.com/news/us/'
        self.url = 'https://www.wsj.com/'
        self.bias_score = 0.6

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('div', class_ = 'WSJTheme--headline--3qd-ycaT')
            for tag in all_headlines:
                # grab the links
                link = str(tag.find('a').get('href'))
                title = str(tag.find('a').text).strip()
                links.append((link,title))
        else:
            # scrape for keyword
            all_headlines = parser.find_all('h3', class_ = 'headline')
            for tag in all_headlines:
                # grab the links
                link = tag.find('a').get('href')
                link = str(self.url + link[1:])
                title = str(tag.find('a').text).strip()
                links.append((link,title))
        # clean out videos
        links = [link for link in links if '/video/' not in link[0]]
        return links