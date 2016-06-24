int R = 11;
int G = 9;
int B = 6;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(R, OUTPUT);
  pinMode(G, OUTPUT);
  pinMode(B , OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  int red = 0;
  int green = 0;
  int blue = 0;
  if (Serial.find("r")) {
    red = Serial.parseInt();
    green = Serial.parseInt();
    blue = Serial.parseInt();
    Serial.println(red);
    Serial.println(green);
    Serial.println(blue);

    analogWrite(R, red);
    analogWrite(G, green);
    analogWrite(B, blue);
  }
}
