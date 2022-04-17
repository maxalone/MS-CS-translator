module.exports = function(RED) {
    function mscs_translator(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var context = this.context();
        node.on('input', function(msg) {

                const { v4: uuidv4 } = uuid;

                var subscriptionKey = node.mskey;
                var endpoint = node.msendp ;
                var location = node.mslocation ;

                    msg.payload.translation.subscriptionKey= subscriptionKey;
                    msg.payload.endpoint = endpoint;
                    msg.payload.location = location;
                    node.send(msg)
                });

    }
    RED.nodes.registerType("mscs_translator",mscs_translator);
}
