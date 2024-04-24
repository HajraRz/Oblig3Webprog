package webprog.oblig2_3_webprog;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.*;
import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {
    List<Billett> allebilletter = new ArrayList<>();

    @PostMapping("/kjopBillett")
    public void kjop(Billett billett){
        allebilletter.add(billett);
    }

    @GetMapping("/hentbilletter")
    public List<Billett> Billett(){
        return allebilletter;
    }

    @GetMapping("/slettAlleBilletter")
    public void slett(){
        allebilletter.clear();
    }
}
