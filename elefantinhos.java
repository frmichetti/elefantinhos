class Elefantinhos {
    public static void main(String[] args) {
    int vezes = 1, quantidade = 1;

        while(true){
            if(quantidade == 1){
                System.out.println(quantidade + " elefante incomoda muita gente!");
            }else{
                if(quantidade % 2 == 0){
                    String incomoda = "";
                    
                    for(int i = 0; i < vezes; i++){
                        incomoda += "incomodam ";
                    }
                    System.out.println(quantidade + " elefantes " + incomoda + "muito mais!");
                    }else{
                    System.out.println(quantidade + " elefantes incomodam muita gente!");
                }
            }
            quantidade++;
            vezes++;
        }
    }
}