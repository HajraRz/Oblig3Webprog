package oblig3.webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {

    @Autowired
    private BillettRepository rep;

    @PostMapping("/kjopBillett")
    public void kjop(Billett billett){
        System.out.println(billett.toString());
        rep.lagreBillett(billett);
    }

    @GetMapping("/hentbilletter")
    public List<Billett> Billett(){
        return rep.hentAlleBilletter();
    }

    @DeleteMapping("/slettAlleBilletter")
    public void slett(){
        rep.slettAlleBilletter();
    }
}
