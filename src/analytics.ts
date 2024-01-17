let logged;

function sendAnaytics(data: string) {
  console.log(data);
  logged = true;
}

sendAnaytics("The  data");
