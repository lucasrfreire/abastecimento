FROM node

ENV NPM_CONFIG_LOGLEVEL warn
RUN echo $APP_ENV
RUN mkdir -p /frontend
WORKDIR /frontend

RUN npm install

CMD if [ ${APP_ENV} = production ]; \
	then \
	npm global add http-server && \
	npm build && \
	cd build && \
	hs -p 3000; \
	else \	
        echo "ok"; \
	fi

EXPOSE 3000

