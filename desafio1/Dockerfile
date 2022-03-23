FROM golang:alpine3.14 as builder

WORKDIR /app 

COPY ./hello-world.go .

RUN go mod init app

RUN CGO_ENABLED=0 GOOS=linux go build hello-world.go


FROM hello-world

WORKDIR /app

COPY --from=builder /app .

ENTRYPOINT ["./hello-world" ]