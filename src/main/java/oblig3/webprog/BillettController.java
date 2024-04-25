package oblig3.webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {
    @Autowired
    BillettRepository rep ;
    List<Billett> allebilletter = new ArrayList<>();

    @PostMapping("/kjopBillett")
    public void kjop(Billett billett){
        System.out.println("Dette er inne på server: ");
        System.out.println("telenfor: " + billett.getTelefonnr());
        System.out.println("Fornavn: " + billett.getFornavn());
        System.out.println("Etternavn: " + billett.getEtternavn());
        System.out.println("Antall: " + billett.getAntall());
        System.out.println("Epost: " + billett.getEpost());
        //allebilletter.add(billett);
        rep.lagreBillett(billett);
    }

    @GetMapping("/hentbilletter")
    public List<Billett> Billett(){
        return rep.hentAlleBilletter();
    }

    @GetMapping("/slettAlleBilletter")
    public void slett(){
        rep.slettAlleBilletter();
    }
}
