# raftjs

Raft is a simple JavaScript library to allow modules which know nothing about each other to communicate and be linked together without having to edit either module. 

Integration is no more than three simple steps:
                  
                  
                  
                  
                   -Register callable functions 
                   -Register callback functions 
                   -Add triggers

Utilizing Raft to link modules together is one single function call per linkage. Raft allows plug-n-play functionality with code like nothing else.

Benefits of using Raft include:

                  -Higher code reusability
                  -Faster integration time
                  -easier inter-module debugging
                  -And overall code readability improvements.


So now that you love it, how to use Raft?:

                 -import raft.js
                 


Example of using raft: 

                 -raft.link('FirebaseChat.onMessage.message', 'Crypto.Decrypt');
                 -raft.link('FirebaseChat.onSend', 'Crypto.Encrypt');
