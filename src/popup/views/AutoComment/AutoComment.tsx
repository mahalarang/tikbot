import { FC } from "react";
import { FormBox, TextField } from "@/components/atoms/Form";
import { Box } from "@/components/atoms";

const AutoComment: FC = () => {
  return (
    <div className="auto-comment">
      <Box flex>
        <Box width="50%" padding="0 5px 0 0">
          <FormBox label="Jumlah Komentar" id="total-comment">
            <TextField
              type="text"
              placeholder="Masukkan Jumlah Komentar"
              required
            />
          </FormBox>
        </Box>
        <Box width="50%" padding="0 0 0 5px">
          <FormBox label="Delay Komentar" id="delay-comment">
            <TextField type="text" placeholder="Default 3000" />
          </FormBox>
        </Box>
      </Box>
    </div>
  );
};

export default AutoComment;
