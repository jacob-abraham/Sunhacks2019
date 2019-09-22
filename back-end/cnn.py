from newssite import Site

class CNN(Site):

    def __init__(self, driver):
        super().__init__(driver)
        self.query_keyword = 'https://www.cnn.com/search?q={}&type=article&size='+str(self.number)
        self.query_breaking = 'https://www.cnn.com/specials/last-50-stories'
        self.url = 'https://www.cnn.com/'
        self.bias_score = -4.4
    
    def get_links(self, keyword=None):
        parser = self.get_parser(keyword)
        links = []
        # no keyword, scarp for breaking
        if keyword is None:
            # grab all headlines
            all_headlines = parser.find_all('h3', class_ = 'cd__headline')

            # grab the links
            link_tags = [tag.find('a').get('href') for tag in all_headlines]
            for tag in all_headlines:
                link = str(tag.find('a').get('href'))
                # remove all non cnn links, al outside links start with http://
                if 'https://' not in link:
                    link = str(self.url + link[1:])
                    title = str(tag.find('span', class_ = 'cd__headline-text').text).strip()
                    links.append((link, title))
        else:
            all_headlines = parser.find_all('h3', class_ = 'cnn-search__result-headline')
            for tag in all_headlines:
                link = str(tag.find('a').get('href')[2:0])
                title = str(tag.find('a').get('href').text).strip()
                links.append((link, title))
        # clean out videos
        links = [link for link in links if '/videos/' not in link[0]]
        return links
