#UTILISATION DE LA DERNIÈRE VERSION OFFICIELLE DE NODE
FROM node:latest as build

#DÉFINITION DU RÉPERTOIRE DE TRAVAIL DANS LE CONTENEUR
WORKDIR /app

#COPIE DE PACKAGE.JSON ET DE PACKAGE-LOCK.JSON DANS LE RÉPERTOIRE DE TRAVAIL
COPY package*.json ./

#INSTALLATION DES DÉPENDANCES
RUN npm install

#COPIE DE TOUS LES FICHIERS DANS LE RÉPERTOIRE DE TRAVAIL
COPY . .

#CONSTRUIRE L'APPLICATION POUR LA PRODUCTION
RUN npm run build

#UTILISATION DE LA DERNIÈRE VERSION DE NGINX POUR UN SERVEUR LÉGER
FROM nginx:latest

#COPIE DU FICHIER DE CONFIGURATION NGINX DANS LE RÉPERTOIRE DE TRAVAIL
COPY nginx.conf /etc/nginx/conf.d/default.conf

#COPIE DES FICHIERS CONSTRUITS DANS L'ÉTAPE BUILD VERS LE RÉPERTOIRE PAR DÉFAUT DE NGINX
COPY --from=build /app/build/ /usr/share/nginx/html

#CRÉATION UTILISATION NGINX POUR LES DROITS
WORKDIR /app
RUN chown -R nginx:nginx /app && chmod -R 755 /app && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid

USER nginx

#EXPOSITION DU PORT 80
EXPOSE 80

#DÉMARRAGE DE NGINX QUAND LE CONTENEUR DÉMARRE
CMD ["nginx", "-g", "daemon off;"]