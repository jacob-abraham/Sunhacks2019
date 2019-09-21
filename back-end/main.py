
from cnn import CNN
from api import api

def main():
    cnn = CNN()
    print(cnn.get_links("democrat"))

if __name__ == '__main__':
    #main()
    api.run(debug=True, port=5000)
