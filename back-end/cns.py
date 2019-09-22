from newssite import Site

class CNS(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.cnsnews.com/search/site/climate%20change'
        self.query_breaking = 'https://www.cnsnews.com/'
        self.bias_score = 8.8

    def get_links(self, keyword):
        parser = self.get_parser(keyword)
        links = []
        if keyword is None:
            # no keyword, scrape for breaking
            all_headlines = parser.find_all('div', class_ = 'views-field views-field-title')
            # grab the links
            for tag in all_headlines:
                link = str(tag.find('span').find('a').get('href'))
                # remove all non cnn links, al outside links start with http://
                if 'https://' not in link:
                    link = str(self.query_breaking + link[1:])
                    title = tag.find('div')
                    if title is not None:
                        title = str(title.text).strip()
                        links.append((link, title))
        else:
            # scrape for keyword
            all_headlines = parser.find_all('h3', class_ = 'title')
            # grab the links
            for tag in all_headlines:
                link = str(tag.find('a').get('href'))
                title = str(tag.find('a').text).strip()
                links.append((link, title))
        # clean out videos
        links = [link for link in links if '/video/' not in link[0]]
        return links