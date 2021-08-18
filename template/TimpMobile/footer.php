<?php

if (!empty($scripts_store) && is_array($scripts_store)) {
    foreach ($scripts_store as $script) {
        echo '<script src="' . $script . '"></script>';
    }
}
?>
</body>
</html>