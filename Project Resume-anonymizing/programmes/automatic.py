import sys
import os
import subprocess

# obtenir le nom des dossiers
fic = open("../configure", "r")
lignes = fic.readlines()
nom_dossier_liste_cv = lignes[2].strip('\n')
nom_dossier_liste_cv_transformes = lignes[4].strip('\n')
nom_dossier_liste_cv_renommes = lignes[6].strip('\n')
# obtenir la liste des cv rentrés par l'utilisateur
p = subprocess.check_output(["ls ", nom_dossier_liste_cv])
liste_noms_cv = p.decode("utf-8").strip("\n").split('\n')

#obtenir l'id de dernier cv
p = subprocess.check_output(["ls", nom_dossier_liste_cv_transformes])
liste_noms_cv_transformes = p.decode("utf-8").strip("\n").split('\n')
if liste_noms_cv_transformes[0] != "":
    id_last_cv = int(liste_noms_cv_transformes[-1].split('_')[0])
else:
    id_last_cv = 0
for cv_nom in liste_noms_cv:
    # obtenir le nom du cv texte qu'on va renvoyer
    nom, prenom = cv_nom.split('_')[0], cv_nom.split('_')[1]
    cv_retour_nom = str(id_last_cv + 1) + "_" + nom[0:2] + "_" + prenom[0]
    # prendre cv original ../liste_cv, le renvoyer flouté dans ../liste_cv_transformes/
    os.system("python3 blind.py " + nom_dossier_liste_cv + "/" + cv_nom + " " + nom_dossier_liste_cv_transformes + "/" + cv_retour_nom + " " + nom + " " + prenom)
    # copier le cv dans ../liste_cv_renommes/ et le renommer sous la forme 'nom + prenom + id'
    os.system("cp " + nom_dossier_liste_cv + "/" + cv_nom + " " + nom_dossier_liste_cv_renommes)
    nv_cv_nom = str(id_last_cv + 1) + "_" + cv_nom
    os.system("mv " + nom_dossier_liste_cv_renommes + "/" + cv_nom + " " + nom_dossier_liste_cv_renommes + "/" + nv_cv_nom)
    id_last_cv += 1
# supprimer les cv de la liste des cv
# os.system("rm ../liste_cv/*")
