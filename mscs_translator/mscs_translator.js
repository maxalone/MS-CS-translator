module.exports = function(RED) {
    function mscs_translator(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            
            msg.payload = Number(msg.payload.length);
            node.send(msg);
        });
    }
    RED.nodes.registerType("mscs_translator",mscs_translator);
}
