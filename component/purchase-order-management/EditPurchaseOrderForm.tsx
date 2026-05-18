"use client";

import { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import Link from "next/link";

import { useRouter } from "next/navigation";

import FormSection from "@/component/common/FormSection";

import { PurchaseOrder } from "@/assets/types";

import {
  FONT_FAMILY,
  themeConfig,
} from "@/assets/constants";

interface Props {
  purchaseOrder: PurchaseOrder;
}

export default function EditPurchaseOrderForm({
  purchaseOrder,
}: Props) {

  const router =
    useRouter();

  const { colors } =
    themeConfig;

  const [formData, setFormData] =
    useState({

      purchaseNo:
        purchaseOrder.purchaseNo,

      vendorName:
        purchaseOrder.vendorName,

      supplierName:
        purchaseOrder.supplierName,

      email:
        purchaseOrder.email,

      phone:
        purchaseOrder.phone,

      productName:
        purchaseOrder.productName,

      brand:
        purchaseOrder.brand,

      category:
        purchaseOrder.category,

      quantity:
        purchaseOrder.quantity,

      unitPrice:
        purchaseOrder.unitPrice,

      tax:
        purchaseOrder.tax,

      discount:
        purchaseOrder.discount,

      paymentStatus:
        purchaseOrder.paymentStatus,

      status:
        purchaseOrder.status,

      orderDate:
        purchaseOrder.orderDate,

      expectedDelivery:
        purchaseOrder.expectedDelivery,

      notes:
        purchaseOrder.notes,
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const totalAmount =

    Number(
      formData.quantity
    ) *

      Number(
        formData.unitPrice
      ) +

    Number(
      formData.tax
    ) -

    Number(
      formData.discount
    );

  const handleSubmit =
    () => {

      console.log(
        "Purchase Order Updated:",
        {
          ...formData,
          totalAmount,
        }
      );

      router.push(
        "/purchase-orders"
      );
    };

  return (

    <Box
      sx={{
        p: 3,

        background:
          colors.bgLight,

        minHeight:
          "100vh",
      }}
    >

      {/* BACK */}
      <Box sx={{ mb: 3 }}>

        <Link
          href="/purchase-orders"
          style={{
            textDecoration:
              "none",
          }}
        >

          <Button
            startIcon={
              <ArrowBackIcon />
            }
            sx={{
              textTransform:
                "none",

              fontWeight:
                600,

              fontFamily:
                FONT_FAMILY.BUTTON,
            }}
          >
            Back to Purchase Orders
          </Button>

        </Link>

      </Box>

      {/* MAIN CARD */}
      <Card
        sx={{
          p: 4,

          borderRadius:
            "24px",

          border:
            `1px solid ${colors.border}`,

          boxShadow:
            "none",
        }}
      >

        {/* HEADER */}
        <Typography
          sx={{
            fontSize: 32,

            fontWeight:
              700,

            mb: 1,

            color:
              colors.textMain,

            fontFamily:
              FONT_FAMILY.HEADING,
          }}
        >
          Edit Purchase Order:
          {" "}
          {
            purchaseOrder.purchaseNo
          }
        </Typography>

        <Typography
          sx={{
            color:
              colors.textSecondary,

            mb: 4,

            fontSize:
              "14px",

            fontFamily:
              FONT_FAMILY.BODY,
          }}
        >
          Update procurement,
          vendor, pricing and
          delivery information.
        </Typography>

        <Grid
          container
          spacing={3}
        >

          {/* VENDOR DETAILS */}
          <FormSection
            title="1. Vendor Details"
            description="Supplier company and contact information."
          >

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                label="Vendor Name"
                name="vendorName"
                value={
                  formData.vendorName
                }
                onChange={
                  handleChange
                }
                placeholder="e.g. Carl Zeiss"
              />

            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                label="Supplier Name"
                name="supplierName"
                value={
                  formData.supplierName
                }
                onChange={
                  handleChange
                }
                placeholder="e.g. Zeiss India"
              />

            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                label="Email"
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                placeholder="vendor@email.com"
              />

            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={
                  formData.phone
                }
                onChange={
                  handleChange
                }
                placeholder="+91 9876543210"
              />

            </Grid>

          </FormSection>

          {/* PRODUCT DETAILS */}
          <FormSection
            title="2. Product Details"
            description="Purchase item and category information."
          >

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                label="Purchase Number"
                name="purchaseNo"
                value={
                  formData.purchaseNo
                }
                onChange={
                  handleChange
                }
                placeholder="PO-2026-001"
              />

            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                label="Product Name"
                name="productName"
                value={
                  formData.productName
                }
                onChange={
                  handleChange
                }
                placeholder="Blue Cut Lens"
              />

            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                label="Brand"
                name="brand"
                value={
                  formData.brand
                }
                onChange={
                  handleChange
                }
                placeholder="RayBan"
              />

            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                select
                fullWidth
                label="Category"
                name="category"
                value={
                  formData.category
                }
                onChange={
                  handleChange
                }
              >

                <MenuItem value="Frame">
                  Frame
                </MenuItem>

                <MenuItem value="Optical Lens">
                  Optical Lens
                </MenuItem>

                <MenuItem value="Contact Lens">
                  Contact Lens
                </MenuItem>

              </TextField>

            </Grid>

          </FormSection>

          {/* LOGISTICS */}
          <FormSection
            title="3. Logistics & Status"
            description="Delivery schedule and payment status."
          >

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                type="date"
                label="Order Date"
                name="orderDate"
                value={
                  formData.orderDate
                }
                onChange={
                  handleChange
                }
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />

            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                type="date"
                label="Expected Delivery"
                name="expectedDelivery"
                value={
                  formData.expectedDelivery
                }
                onChange={
                  handleChange
                }
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />

            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                select
                fullWidth
                label="Status"
                name="status"
                value={
                  formData.status
                }
                onChange={
                  handleChange
                }
              >

                <MenuItem value="Pending">
                  Pending
                </MenuItem>

                <MenuItem value="Processing">
                  Processing
                </MenuItem>

                <MenuItem value="Delivered">
                  Delivered
                </MenuItem>

                <MenuItem value="Received">
                  Received
                </MenuItem>

              </TextField>

            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                select
                fullWidth
                label="Payment Status"
                name="paymentStatus"
                value={
                  formData.paymentStatus
                }
                onChange={
                  handleChange
                }
              >

                <MenuItem value="Paid">
                  Paid
                </MenuItem>

                <MenuItem value="Pending">
                  Pending
                </MenuItem>

                <MenuItem value="Partial">
                  Partial
                </MenuItem>

                <MenuItem value="Overdue">
                  Overdue
                </MenuItem>

              </TextField>

            </Grid>

          </FormSection>

          {/* COST DETAILS */}
          <FormSection
            title="4. Pricing & Costs"
            description="Order quantity and pricing breakdown."
          >

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                type="number"
                label="Quantity"
                name="quantity"
                value={
                  formData.quantity
                }
                onChange={
                  handleChange
                }
              />

            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                type="number"
                label="Unit Price"
                name="unitPrice"
                value={
                  formData.unitPrice
                }
                onChange={
                  handleChange
                }
              />

            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                type="number"
                label="Tax"
                name="tax"
                value={
                  formData.tax
                }
                onChange={
                  handleChange
                }
              />

            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                type="number"
                label="Discount"
                name="discount"
                value={
                  formData.discount
                }
                onChange={
                  handleChange
                }
              />

            </Grid>

          </FormSection>

          {/* NOTES */}
          <Grid size={{ xs: 12 }}>

            <TextField
              fullWidth
              multiline
              rows={3}
              label="Notes"
              name="notes"
              value={
                formData.notes
              }
              onChange={
                handleChange
              }
              placeholder="Add procurement notes..."
            />

          </Grid>

          {/* SUMMARY */}
          <Grid size={{ xs: 12 }}>

            <Box
              sx={{
                mt: 2,

                p: 3,

                borderRadius:
                  "18px",

                border:
                  `1px solid ${colors.border}`,

                background:
                  "#F8FAFC",
              }}
            >

              <Typography
                sx={{
                  fontWeight:
                    700,

                  fontSize:
                    "16px",

                  mb: 2,

                  color:
                    colors.textMain,
                }}
              >
                Purchase Summary
              </Typography>

              <Divider
                sx={{ mb: 2 }}
              />

              <Grid
                container
                spacing={2}
              >

                <Grid
                  size={{
                    xs: 6,
                    sm: 3,
                  }}
                >

                  <Typography
                    sx={{
                      fontSize:
                        "12px",

                      color:
                        colors.textSecondary,
                    }}
                  >
                    Subtotal
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      fontSize:
                        "16px",

                      mt: 0.5,
                    }}
                  >
                    ₹
                    {(
                      Number(
                        formData.quantity
                      ) *
                      Number(
                        formData.unitPrice
                      )
                    ).toLocaleString()}
                  </Typography>

                </Grid>

                <Grid
                  size={{
                    xs: 6,
                    sm: 3,
                  }}
                >

                  <Typography
                    sx={{
                      fontSize:
                        "12px",

                      color:
                        colors.textSecondary,
                    }}
                  >
                    Tax
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      fontSize:
                        "16px",

                      mt: 0.5,

                      color:
                        colors.error,
                    }}
                  >
                    ₹
                    {Number(
                      formData.tax
                    ).toLocaleString()}
                  </Typography>

                </Grid>

                <Grid
                  size={{
                    xs: 6,
                    sm: 3,
                  }}
                >

                  <Typography
                    sx={{
                      fontSize:
                        "12px",

                      color:
                        colors.textSecondary,
                    }}
                  >
                    Discount
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight:
                        700,

                      fontSize:
                        "16px",

                      mt: 0.5,

                      color:
                        colors.success,
                    }}
                  >
                    ₹
                    {Number(
                      formData.discount
                    ).toLocaleString()}
                  </Typography>

                </Grid>

                <Grid
                  size={{
                    xs: 6,
                    sm: 3,
                  }}
                >

                  <Typography
                    sx={{
                      fontSize:
                        "12px",

                      color:
                        colors.textSecondary,
                    }}
                  >
                    Grand Total
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight:
                        800,

                      fontSize:
                        "20px",

                      mt: 0.5,

                      color:
                        colors.primary,
                    }}
                  >
                    ₹
                    {totalAmount.toLocaleString()}
                  </Typography>

                </Grid>

              </Grid>

            </Box>

          </Grid>

          {/* ACTION BUTTONS */}
          <Grid size={{ xs: 12 }}>

            <Box
              sx={{
                display:
                  "flex",

                justifyContent:
                  "flex-end",

                gap: 2,

                mt: 2,
              }}
            >

              <Button
                variant="outlined"
                onClick={() =>
                  router.push(
                    "/purchase-orders"
                  )
                }
                sx={{
                  borderRadius:
                    "10px",

                  textTransform:
                    "none",

                  height:
                    "46px",

                  px: 3,
                }}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                onClick={
                  handleSubmit
                }
                sx={{
                  borderRadius:
                    "10px",

                  textTransform:
                    "none",

                  height:
                    "46px",

                  px: 4,

                  boxShadow:
                    "none",
                }}
              >
                Update Purchase Order
              </Button>

            </Box>

          </Grid>

        </Grid>

      </Card>

    </Box>
  );
}