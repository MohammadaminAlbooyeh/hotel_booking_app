# Dockerfile for Django backend
FROM python:3.11-slim
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["bash", "-c", "source venv/bin/activate && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
