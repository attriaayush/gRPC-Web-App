FROM envoyproxy/envoy
COPY ./envoy.yaml /etc/envoy/envoy.yaml
CMD /usr/local/bin/envoy