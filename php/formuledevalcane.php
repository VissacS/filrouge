<?php //On utilise 3 lignes pour représenter les alcanes
    require "chimie.php";
    $nombre = (int) $_POST["nombre"];
?>


<div class="ligne-atome-dev">
    <?php // Ligne 1
        afficherAtomeDev("vide", false, false, false,false);
        afficherAtomeDev("hydrogene", false, false, true,false);
        for ($i = 0; $i <$nombre-1; $i++) {
            afficherAtomeDev("hydrogene", false, false, true,false);
        }
    ?>
</div>
<div class="ligne-atome-dev">
    <?php // Ligne 2
        afficherAtomeDev("hydrogene", false, true, false,false);
        afficherAtomeDev("carbone");
        for ($i = 0; $i <$nombre-1; $i++) {
            afficherAtomeDev("carbone");
        }
        afficherAtomeDev("hydrogene", false, false, false,false);
    ?>
</div>
<div class="ligne-atome-dev">
    <?php // Ligne 3
        afficherAtomeDev("vide", false, false, false,false);
        afficherAtomeDev("hydrogene", true, false, false,false);
        for ($i = 0; $i <$nombre-1; $i++) {
            afficherAtomeDev("hydrogene", true, false, false,false);
        }
    ?>
</div>