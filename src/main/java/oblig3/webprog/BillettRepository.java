package oblig3.webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillett (Billett innBillett){
        String sql = "INSERT INTO Billetter (valg, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql,innBillett.getValg(),innBillett.getAntall(),innBillett.getFornavn(),innBillett.getEtternavn(),innBillett.getTelefonnr(),innBillett.getEpost());
    }

    public List<Billett> hentAlleBilletter(){
        String sql = "SELECT * FROM Billetter";
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return alleBilletter;
    }

    public void slettAlleBilletter(){
        String sql = "DELETE FROM Billetter";
        db.update(sql);
    }
}
