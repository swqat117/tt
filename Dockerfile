# Stage 2 - the production environment
FROM nginx:1.17.1
WORKDIR /
COPY app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]