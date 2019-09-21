
from cnn import CNN
from application import application

def main():
    cnn = CNN()
    print(cnn.get_links("democrat"))

if __name__ == '__main__':
    #main()
    application.run(host='0.0.0.0', debug=True, port=5000)
