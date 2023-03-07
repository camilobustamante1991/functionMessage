const azure = require('azure-storage');

module.exports = async function (context, myQueueItem) {
    context.log('Node.js queue trigger function processed message:', myQueueItem);

    const queueService = azure.createQueueService(process.env.AzureWebJobsStorage);
    const queueName = 'creteMessajeSura';

    // Crea la cola si no existe
    //queueService.createQueueIfNotExists(queueName, function(error, result, response){
      //  if(!error){
        //    context.log('Cola creada o ya existente');
       // }
    //});

    // Agrega un mensaje a la cola
    queueService.createMessage(queueName, myQueueItem, function(error, result, response){
        if(!error){
            context.log('Mensaje agregado a la cola');
        }
    });
};
