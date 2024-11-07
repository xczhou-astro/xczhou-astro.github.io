---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

# Photometric Redshifts for Chinese Space Station Telescope

Redshift is a measurement of distance in cosmological studies, and is a fundamental quantity for galaxy. The most accurate redshifts are measured by analyzing the spectra. However, spectroscopic observation are time consuming, therefore, cannot cover the footprints of current photometric surveys. Under such circumstances, photometric redshifts (Photo-\\(z\\)), although less accurate, are inevitable for most cosmological studies. Photo-\\(z\\) can be estimated from photometric measurements including magnitudes, fluxes, colors and others. The accuracy of photo-\\(z\\) is determined by the number and wavelength coverage of the associated filters, for example, sources in the famous COSMOS field have the most accurate photo-\\(z\\)s, since they are observed by many surveys, using filters from ultraviolet to infrared. On the other hand, the employed methods can also affect the accuracy, and they are actively being studied and developed to increase the accuracy.

Conventionally, we utilize template fitting to estimate the redshifts. This approach finds the redshifts by minimizing the \\(\chi^2\\) between the photometric measurements and values derived from templates. The completeness of templates deeply affects the accuracy of estimated redshifts from this approach, since some galaxies probably cannot be represented by any template in the template list. 

Another method arises since the proposation of machine learning (ML). A relation between photometric measurements and redshifts can be empirically derived using a substantial amount of data, and can be used for estimating photo-\\(z\\)s for other data. Currently, deep learning algorithms or neural networks are widely employed in this field, since its flexibility and capability compared to other machine learning algorithms. And most importantly, deep learning can process other types of data except for photometric measurements, including galaxy images, thanks to the development and evolution of convolutional neural networks (CNN). Due to the flexibility for data and high accuracy for estimation, the algorithm is perfect for photo-\\(z\\) estimation pipeline for wide and deep surveys like Euclid, Euclid, LSST, CSST and other ongoing or planned photometric surveys. 

Chinese Space Station Telescope (CSST) is a wide and deep survey instrument. Due to the design of focal plane, it can simultaneously perform photometric and slitless spectroscopic surveys. The photometric surveys are conducted by 7 filters, NUV, u, g, r, i, z and y, covering from near-ultraviolet to near-infrared wavelength. 

In this work, we investigate the redshift accuracy can be achieved from data expected to be observed by CSST. The data are simulated based on HST observations, since they are both space telescope, sharing similar instrumental effects. Galaxy images are firstly generated, and photometies are performed using aperture photometry method by SExtractor. We utilize multi-layer perceptron (MLP) and convolutional neural networks (CNN) to estimate redshift from photometric measurements and images respectively. In addition, we also combine the two networks inputting both datasets, and this network is named as Hybrid. To test if further improvements can be achieved, we employ transfer learning technique to transfer the well-trained MLP and CNN to Hybrid with weights fixed. This network is named as Hybrid transfer, leveraging the features learned by MLP and CNN that are tailored for redshift estimations. The architecture of MLP, CNN and Hybrid is illustrated following:

From these networks, the estimation for about 10,000 data produces results as follows:

We notice that the outliers defined as \\(\vert\Delta z\vert > 0.15(1 + z_{\rm true})\\) are indeed reduced from image data compared to from photometric measurements, suggesting that the images possess more information compared to photometry, and can be extracted by CNN to enhance the outliers. Additionally, the Hybrid and Hybrid transfer further enhance the performance, especially for Hybrid transfer. 

In some cosmological studies, uncertainties are of the same importance to the redshift values. Therefore, in another work, we convert the networks mentioned before to Bayesian neural networks (BNNs). The BNNs employ specific distributions to represent the weights and biases, and the outputs are Gaussian distributions created by estimated redshifts and uncertainties. This network can account for both epistemic and aleatoric uncertainties. The former is from the network model, and the latter is from the instrinsic corruption of data. Additionally, the estimated uncertainties need to be calibrated, since they may be over- or under-estimated, not obey the statistical principle. Finally, BNNs built upon flipout approach can achieve the results as follows:

The metrics follow similar trend to the conventional networks, but with the accuracy decreased.


# Foreground Removal for CO Line Intensity Mapping



# Redshift Estimation for CSST Slitless Spectroscopic Survey

# DESI Photo-z Catalogue

DESI Legacy Surveys, encompassing three different surveys, MzLS, DECaLS and BASS, are the foundations of DESI spectroscopic survey. Since accurate spectroscopic redshifts cannot be measured by all galaxies, but only a fraction of them, the photometric redshifts (photo-\\(z\\)s) are still necessary for astronomical and cosmological studies. Commonly, photo-\\(z\\)s can be estimated from photometric measurements in several bands, for example from magnitudes and colors. However, the emergence of convolutional network (CNN) provides us another routine by directly estimating photo-\\(z\\)s from imaging data. This approach can naturally incorporate the morphological informations from galaxy images to enhance the accuracy of redshift estimations. Furthermore, due to the equal importance of uncertainties, CNN can be built in Bayesian framework as Bayesian neural networks (BNN) to account for the epistemic uncertainties from network models and aleatoric uncertainties from data.

In this work, we train the BNNs built upon Multiplicative Normalizing Flows (MNF, [Github](https://github.com/janosh/tf-mnf)) utilizing galaxy images in 3 optical bands from DESI Legacy Surveys (DESI LS) and 2 infrared bands from Wide-field Infrared Survey Explorer (WISE) and corresponding spectroscopic redshifts from the DESI early data release (DESI-EDR), leveraging the high quality and accurate measurements of spec-\\(z\\)s by DESI.

We found that categorizing the sources into different groups based on their charateristics and estimating their photo-\\(z\\)s within their groups separately provides enhanced accuracy compared to estimating them collectively. Here we categorize the sources into four groups: Bright Galaxy Sample (BGS), Luminous Red Galaxies (LRG), Emission Line Galaxies (ELG) and a group including the remaining sources, referred as NON, based on target selections of DESI. The target selections are neccesary for ongoing and planned spectroscopic surveys, since the spec-\\(z\\)s cannot be accurately measured for all sources in a limited exposure time. Target selections are utilized to select the certain sources with obvious spectroscopic features for straightforward spec-\\(z\\) measurements, and they are performed using photometric measurements. DESI LS are utilized for target selections of DESI. Therefore, we categorize the sources into four groups based on endeavors of DESI target selections.

With outliers defined as \\(|\Delta z| > 0.15(1 + z_{\rm true})\\), accuracy as \\(\sigma_{\rm NMAD}\\), mean bias \\(\overline{\Delta z}\\) and mean uncertainty \\(\overline{E}\\), we obtain the following results for four groups of sources: 

![BGS](../figures/BGS_MNF.png)![LRG](../figures/LRG_MNF.png)  
![ELG](../figures/ELG_MNF.png)![NON](../figures/NON_MNF.png)

And we employ UMAP to analyze the deeper reasons for the distinct behaviors for these groups. The UMAP is created using the 5 magnitudes and half light radius to mimic the method of deriving redshifts from imaging data. They are displayed below:

We notice good correlations between the reduced 2d positions and redshifts for BGS and LRG. Contrary, correlations are less pronouced for ELG. Interestingly, NON is divided to 2 parts, with one resembling the ELG, and the other one having good correlations.

Furthermore, we analyze the photo-\\(z\\) accuracy with respect to galaxy morphological classifications. The classifications are produced in photometry measurements by in model fitting by Tractor. The following figure displays the distribution of half-light radius for four classifications and the mean bias with respect to the radius. This analysis demonstrates that larger radius offers higher precision, as more features can be utilized for sources with larger radius. And SER commonly has more large radius, rendering higher accuracy, followed by DEV, EXP and REX. 

# galaxyEmulator

Galaxy can be emulated using magneto-hydrodynamical simulations by assigning each particle with a SED using radiative transfer code, instead of
adopting empirical method, such as Halo occupation distributions (HODs).  
We build a Python wrapper to emulate galaxies, involving complete routine from preprocessing to postprocessing, from IllustrisTNG using SKIRT.
Preprocessing extracts stellar and dust particles from IllustrisTNG, assigns SED to them by astronomical parameters, such as mass, metallicity and so on, and executes the SKIRT code. On the other hand, postprocessing applies instrumental and observational effects, including point spread functions (PSFs) and background noises for specific instruments.  
This project serves as the foundations for addressing other interesting works including deblending analysis and galaxy parameter estimations.  
Our code is publicly available at [Github](https://github.com/xczhou-astro/galaxyEmulator) and relevant paper is still drafting. 