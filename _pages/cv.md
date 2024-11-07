---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Photometric Redshifts for Chinese Space Station Telescope

We develop a redshift estimation pipeline using deep learning algorithms for Chines Space Station Telescope (CSST). This pipeline utilize multi-layer perceptron (MLP), convolutional neural network (CNN) and combination of these two networks, called Hybrid, to produce redshifts from photometric measurements, galaxy images, and combination of the two datasets. Some examples of galaxy images simulated based on HST:

![Result](../figures/photo-z_CSST/galaxy_images_photoz_CSST.jpg)

The architecure of our networks are as follows:

![Result](../figures/photo-z_CSST/Architecture_for_photoz.jpg)

And for further improvement, transfer learning technique is employed for Hybrid network, leveraging the features tailored to photo-\\(z\\). This network is referred as Hybrid transfer. The results for these four networks are as follows:

![Result](../figures/photo-z_CSST/result_photoz_CSST.jpg)

For consideration for uncertainties, we convert the networks to Bayesian neural networks. And the results are displayed as follow:

![Result](../figures/photo-z_CSST/result_BNN_photoz_CSST.jpg)

Associated codes are publicly available at [Github](https://github.com/xczhou-astro/CSST_photo_z_dl)

## Foreground Removal for CO Line Intensity Mapping

<!-- Line Intensity Mapping (LIM) is a new probe for cosmological studies. This probe does not require resolutions from each source, only integrating the line emission from ISM, making it cheaper compared to other survey instruments. Several emission lines can be tracers, such as CII, CO and 21cm. However, the foreground and interloper emissions are the main obstacles against the cosmological constraints. Foreground removal methods are under active development, including blind ones, like Principal Components Analysis (PCA) and Independent Components Analysis (ICA), and empirical ones like deep learning algorithms. PCA can remove the foreground components that is correlated with frequencies. However, due to the beam effects of instruments that is also correlated, this method will introduce some deviations to the true power spectra in large and small scales, hindering the cosmological constraints. 

In this work, we take CO emission as an example, employing deep learning to investigate the beam effects on PCA foreground removal. The data are simulated based on a N-body simulations, and employ the CO luminosity model to simulate the intensity maps of CO. Two CO models, providing middle and low CO luminosity, are considered. For foreground, we take into account several components, including dust, synchrotron, spinning dust, free-free and CMB Anisotropy, provided by PySM3. We train a simple generative model, U-Net, to remove the foregrounds and beam effects from CO maps preprocessed by PCA. The results demonstrate that the deviations for power spectra are successfully calibrated regardless the number of components that PCA subtracts, as follows: -->


## Redshift Estimation for CSST Slitless Spectroscopic Survey



## DESI Photo-z Catalogue

DESI Legacy Surveys, encompassing three different surveys, MzLS, DECaLS and BASS, are the foundations of DESI spectroscopic survey. Since accurate spectroscopic redshifts cannot be measured by all galaxies, but only a fraction of them, the photometric redshifts (photo-\\(z\\)s) are still necessary for astronomical and cosmological studies. Commonly, photo-\\(z\\)s can be estimated from photometric measurements in several bands, for example from magnitudes and colors. However, the emergence of convolutional network (CNN) provides us another routine by directly estimating photo-\\(z\\)s from imaging data. This approach can naturally incorporate the morphological informations from galaxy images to enhance the accuracy of redshift estimations. Furthermore, due to the equal importance of uncertainties, CNN can be built in Bayesian framework as Bayesian neural networks (BNN) to account for the epistemic uncertainties from network models and aleatoric uncertainties from data.

In this work, we train the BNNs built upon Multiplicative Normalizing Flows (MNF, [Github](https://github.com/janosh/tf-mnf)) utilizing galaxy images in 3 optical bands from DESI Legacy Surveys (DESI LS) and 2 infrared bands from Wide-field Infrared Survey Explorer (WISE) and corresponding spectroscopic redshifts from the DESI early data release (DESI-EDR), leveraging the high quality and accurate measurements of spec-\\(z\\)s by DESI.

We found that categorizing the sources into different groups based on their charateristics and estimating their photo-\\(z\\)s within their groups separately provides enhanced accuracy compared to estimating them collectively. Here we categorize the sources into four groups: Bright Galaxy Sample (BGS), Luminous Red Galaxies (LRG), Emission Line Galaxies (ELG) and a group including the remaining sources, referred as NON, based on target selections of DESI. The target selections are neccesary for ongoing and planned spectroscopic surveys, since the spec-\\(z\\)s cannot be accurately measured for all sources in a limited exposure time. Target selections are utilized to select the certain sources with obvious spectroscopic features for straightforward spec-\\(z\\) measurements, and they are performed using photometric measurements. DESI LS are utilized for target selections of DESI. Therefore, we categorize the sources into four groups based on endeavors of DESI target selections.

With outliers defined as \\(\vert\Delta z\vert > 0.15(1 + z_{\rm true})\\), accuracy as \\(\sigma_{\rm NMAD}\\), mean bias \\(\overline{\Delta z}\\) and mean uncertainty \\(\overline{E}\\), we obtain the following results for four groups of sources: 

![Result](../figures/DESI_z_result.jpg)

And we employ UMAP to analyze the deeper reasons for the distinct behaviors for these groups. The UMAP is created using the 5 magnitudes and half light radius to mimic the method of deriving redshifts from imaging data. They are displayed below:

We notice good correlations between the reduced 2d positions and redshifts for BGS and LRG. Contrary, correlations are less pronouced for ELG. Interestingly, NON is divided to 2 parts, with one resembling the ELG, and the other one having good correlations.

Furthermore, we analyze the photo-\\(z\\) accuracy with respect to galaxy morphological classifications. The classifications are produced in photometry measurements by in model fitting by Tractor. The following figure displays the distribution of half-light radius for four classifications and the mean bias with respect to the radius. This analysis demonstrates that larger radius offers higher precision, as more features can be utilized for sources with larger radius. And SER commonly has more large radius, rendering higher accuracy, followed by DEV, EXP and REX. 

## galaxyEmulator

Galaxy can be emulated using magneto-hydrodynamical simulations by assigning each particle with a SED using radiative transfer code, instead of
adopting empirical method, such as Halo occupation distributions (HODs).  
We build a Python wrapper to emulate galaxies, involving complete routine from preprocessing to postprocessing, from IllustrisTNG using SKIRT.
Preprocessing extracts stellar and dust particles from IllustrisTNG, assigns SED to them by astronomical parameters, such as mass, metallicity and so on, and executes the SKIRT code. On the other hand, postprocessing applies instrumental and observational effects, including point spread functions (PSFs) and background noises for specific instruments.  
This project serves as the foundations for addressing other interesting works including deblending analysis and galaxy parameter estimations.  
Our code is publicly available at [Github](https://github.com/xczhou-astro/galaxyEmulator) and relevant paper is still drafting. 