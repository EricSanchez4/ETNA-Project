from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import blind
from fastapi.responses import FileResponse

# Initialise le serveur backend FastAPI
app = FastAPI()

# Configuration du CORS. Le CORS est une sécurité qui empêche que des sites autre où se situe le serveur
# FastAPI puisse faire des requêtes REST sur le backend. Ici on autorise tout le monde à faire des
# requêtes REST sur le serveur
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Si le front ( le client ) fait une requête POST sur l'addresse http://localhost:3000/uploadfile/
# alors la fonction ci dessous sera executée. le paramètre file est le fichier que l'on a récupéré du
# front. La réponse à la requete REST est le message : Le python à fait son taff ! Lien du CV modifié 
@app.post("/uploadfile/")
def create_upload_file(file: UploadFile):
    print("J'ai bien recu le fichier " + file.filename + " de la part du site web !")
    with open("./sortie_pdf.pdf", "wb+") as file_object:
        file_object.write(file.file.read())
    my_regex = blind.build_regex_name("sortie_pdf.pdf")
    txt = blind.search_and_remove_regex(my_regex, "out_text.txt")
    return {"message": "Le python à fait son taff !"}
