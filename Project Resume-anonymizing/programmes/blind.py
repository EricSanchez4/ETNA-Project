from pdfminer.pdfpage import PDFPage
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.converter import TextConverter
from pdfminer.layout import LAParams
import io
import re
import sys


# Fonction principale qui permet d'ouvrir le PDF et de récupérer l'ensemble de données.
# Nous supprimmons certaines données afin que le fichier de sortie sois anonymizé


def build_regex_name(name):
    """
    Crée une regex pour le nom et le prénom, avec la première lettre en majuscule
    """
    regex = ""
    for char in name:
        if char == "e":
            regex = regex + "[e|é|è|ê|ë]"
        elif char == "o":
            regex = regex + "[o|ô]"
        elif char == "i":
            regex = regex + "[i|î|ï]"
        elif char == "c":
            regex = regex + "[c|ç]"
        else:
            regex = regex + char
    return regex[0].upper() + regex[1:]

def search_and_remove_regex(my_regex, txt):
    """
    Supprime toutes les occurences d'une expression régulière dans un texte
    """
    L = re.findall(my_regex, txt)
    for element in L:
        txt = txt.replace(element, '')
    return txt

def extract_text_from_pdf(input_file):
    """
    renvoie le texte d'un pdf sous forme de chaine de caractères.
    """
    fic = open(input_file,'rb')
    resMgr = PDFResourceManager()
    # convertir data en string
    retData = io.StringIO()
    TxtConverter = TextConverter(resMgr,retData, laparams=LAParams())
    interpreter = PDFPageInterpreter(resMgr,TxtConverter) # prend en compte la recherche d'autres pages
    for page in PDFPage.get_pages(fic):
        interpreter.process_page(page)
    return retData.getvalue()


def build_output_file(txt, output_file):
    with open(output_file,'w') as of:
        of.write(txt)


def main():
    input_file, output_file = sys.argv[1], sys.argv[2] # Arg 1 = (input_file) Arg 2 = (output_file)
    txt = extract_text_from_pdf(input_file)
    #création des regex
    regex_email = "[^@\s]+@[^@\s]+.[^@\s]+" # Nos REGEX pour récupérer Mail, Tel, URL.
    regex_telephone = "(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}"
    regex_URL = "http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+"
    firstname, lastname = sys.argv[3], sys.argv[4]
    regex_firstname = build_regex_name(firstname)
    regex_lastname = build_regex_name(lastname)
    #suppression des regex
    txt = search_and_remove_regex(regex_email,txt)
    txt = search_and_remove_regex(regex_telephone,txt)
    txt = search_and_remove_regex(regex_URL,txt)
    txt = search_and_remove_regex(regex_firstname,txt)
    txt = search_and_remove_regex(regex_lastname,txt)
    txt = search_and_remove_regex(regex_firstname.upper(),txt)
    txt = search_and_remove_regex(regex_lastname.upper(),txt)
    txt = search_and_remove_regex(regex_firstname.lower(),txt)
    txt = search_and_remove_regex(regex_lastname.lower(),txt)
    txt = search_and_remove_regex("Contact".upper(),txt)
    txt = search_and_remove_regex("Profil".upper(),txt)
    txt = search_and_remove_regex("LinkedIn".upper(),txt)
    build_output_file(txt, output_file)

main()
