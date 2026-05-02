FROM ollama/ollama:0.22.0

ARG OLLAMA_UID=1010
ARG OLLAMA_GID=1010

RUN groupadd --gid "${OLLAMA_GID}" ollama && \
    useradd --uid "${OLLAMA_UID}" \
    --gid "${OLLAMA_GID}"  \
    --create-home \
    --shell /bin/sh ollama && \
    mkdir -p /home/ollama/.ollama/models && \
    chown -R ollama:ollama /home/ollama

USER ollama

ENV OLLAMA_MODELS=/home/ollama/.ollama/models