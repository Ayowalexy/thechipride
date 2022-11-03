import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from "@chakra-ui/react";
  import { Outfit } from "./Text";
  import { ratingData } from "./data";
  
  const RatingTable = () => {
    return (
      <TableContainer
        mt="70px"
        backgroundColor="#fff"
        borderRadius="15px"
        boxShadow="0px 2px 20px 16px rgba(223, 220, 255, 0.3)"
      >
        <Table variant="simple">
          <Thead>
            <Tr borderBottom="2px solid rgba(0,0,0,0.1)">
              <Th>
                <Outfit
                  props={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  User ID
                </Outfit>
              </Th>
              <Th>
                <Outfit
                  props={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                 Listing Date
                </Outfit>
              </Th>
              <Th>
                <Outfit
                  props={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  Listing ID
                </Outfit>
              </Th>
              <Th>
                <Outfit
                  props={{
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  Rating
                </Outfit>
              </Th>
              
            </Tr>
          </Thead>
          <Tbody>
            {ratingData.map((element, idx) => (
              <Tr
                key={idx}
                borderTop="2px solid #fff"
                color="#000"
                fontSize="16px"
                fontWeight={400}
                fontFamily="Ambit"
              >
                <Td pt="30px">{element.userId}</Td>
                <Td pt="30px">{element.listingdate}</Td>
                <Td pt="30px">{element.listingid}</Td>
                <Td pt="30px">{element.rating}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  };
  
  export default RatingTable;
  