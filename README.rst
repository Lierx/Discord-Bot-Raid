Raid Bot
=========
Made By `Katast <https://github.com/Katast666/>`__

Introducción.
-----------
Un bot de raid potente hecho para discord.js v12.5

Este ``Raid Bot`` es Open Source pero no olvides pasarte por nuestro `Servidor Oficial De Discord <https://discord.gg/j2HnkDZPnK>`__

Paquetes.
---------------
``@discordjs/rest`` En la versión 0.3.0

``chalk`` En la versión 4.1.0

``colors`` En la versión 1.4.0

``discord-api-types`` En la versión 0.26.1

``discord-streaming`` En la versión 3.0.1

``discord.js`` en la versión 12.5.1

``fs`` en la versión 0.0.1-security

Instalación.
-----------
Para su instalación vamos a necesitar ``node.js`` última versión y los paquetes anteriormente mencionados.

``git clone https://github.com/Katast666/Discord-Bot-Raid``

``cd Discord-Bot-Raid``

``npm i``

Personalización
-----------
Ahora edita el archivo `config.json <https://github.com/Katast666/Discord-Bot-Raid/blob/main/config.json>`__

.. code:: json
   
       {
         "prefix" : ".",
       
         "ids" : ["DISCORD.ID.OWNER1", "DISCORD.ID.OWNER2"], 
      
         "estado" : "ESTADO.DISCORD"
       }
**1.** En ``prefix`` va el ``Prefix`` con el que se escribirán los comandos del bot. 

*EJ:* ``.on`` el "." Sería el prefix.

**2.** En ``ids`` van las ID de los que tienen acceso a activar el bot. puedes añadir infinitas ids gracias a el sistema que le añadí. Solo pone una , y junto a "" añade más ids.

*EJ:* ``"ids" :  ["id1", "id2", "id3", etc..],``

**3.** En ``estado`` va el ``estado`` que tendrá el bot. puedes cambiarlo a lo que quieras mientras sea corto.

*EJ:* ``"estado" : "Hola Mundo."``

Una vez hecho esto solo cambia el token del bot en el client.login en `index.js <https://github.com/Katast666/Discord-Bot-Raid/blob/main/index.js>`__.

.. code:: javascript
      
      client.login(token)

Recuerda que si estás en replit puedes usar las variables .env.

Encendido.
---------
Simplemente ejecuta el archvio index.js
.. code:: 
     node index.js

Créditos.
-------
Dueño de el proyecto ¿¿KATA$T??#9200 cualquier problema a informar porfavor usa ``issues``.

.. code::

      © ¿¿KATA$T??#9200 - 30.08.2022
