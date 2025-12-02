FROM python:3.12-slim

WORKDIR /workspaces/R3F_Playground/backend

# Install backend dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend source
COPY . .

# Expose Flask port
EXPOSE 5000

CMD ["python", "main.py"]
