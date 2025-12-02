FROM node:22

WORKDIR /workspaces/R3F_Playground/frontend

# Install deps
COPY package.json package-lock.json ./
RUN npm install

# Copy source
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Important: "--host" allows access outside the container
CMD ["npm", "run", "dev", "--", "--host"]
